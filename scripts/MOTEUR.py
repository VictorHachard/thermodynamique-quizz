# MOTEUR 4T / 2T (Casio)
# essence ou diesel
# le script est en etapes :
# a chaque "1=oui vide=non"
# tu peux t arreter la
# (ex : exo B1 = les points)

R = 8.314

def d(t):
    while True:
        s = input(t)
        if s == "":
            return None
        try:
            return float(s)
        except:
            print("nombre invalide")

def dr(t):
    while True:
        v = d(t)
        if v is not None:
            return v
        print("obligatoire")

def q(expl, tag):
    print(expl)
    print("(vide = passer)")
    return d(tag)

def qr(expl, tag):
    print(expl)
    return dr(tag)

def go(t):
    print(t)
    s = input("1=oui vide=non : ")
    return s == "1"

def p(n, v):
    print(n + " = " + str(round(v, 2)))

print("=== MOTEUR 4T/2T ===")

print("")
print("essence ou diesel ?")
ty = input("1=ess 2=die : ")
if ty == "2":
    print("-> diesel")
else:
    ty = "1"
    print("-> essence")
print("4 temps ou 2 temps ?")
tp = input("1=4T 2=2T : ")
if tp == "2":
    kt = 60.0
    print("-> 2 temps")
else:
    kt = 120.0
    print("-> 4 temps")

print("")
print("--- GEOMETRIE ---")
ep = qr("taux de compression", "eps= ")
print("gamma Cp/Cv")
print("vide = 1.4 (air)")
g = d("gamma= ")
if g is None:
    g = 1.4
    print("gamma pris = 1.4")
tb = qr("T admission en C", "Tadm= ") + 273.15
pb = qr("p admission en bar", "padm= ") * 100000
print("cylindree TOTALE L")
print("cm3/1000 = L")
print("ex 500 cm3 -> 0.5")
cy = dr("cyl= ")
z = qr("nombre de cylindres", "nbcyl= ")

cv = R / (g - 1)
cp = g * cv

cu = cy / z / 1000.0
va = cu / (ep - 1)
vb = va * ep
n = pb * vb / (R * tb)

tc = tb * ep ** (g - 1)
pc = pb * ep ** g

print("")
print("--- POINT B et C ---")
p("VA cm3", va * 1e6)
p("VB cm3", vb * 1e6)
print("n mol = " + str(round(n, 5)))
p("TB K", tb)
p("TC K", tc)
p("pC bar", pc / 100000)

et = None
if ty == "1":
    et = 1 - ep ** (1 - g)
    print("")
    print("--- RENDEMENT TH ---")
    p("eta th %", et * 100)

print("")
print("--- SUITE ---")
print("points du cycle finis")
suite = go("combustion D,E,W,Q ?")

if suite:
    print("")
    print("--- COMBUSTION D ---")
    q1 = q("QCD en Joules ?", "QCD= ")
    if q1 is None:
        r = None
        if ty == "2":
            r = q("rapport combust rho", "rho= ")
        if r is not None:
            td = tc * r
            q1 = n * cp * (td - tc)
        else:
            print("QCD par le carburant")
            pci = qr("PCI carbu kJ/kg", "PCI= ")
            x = qr("x du CxHy", "x= ")
            y = qr("y du CxHy", "y= ")
            print("exces d air lambda")
            print("vide = 1")
            la = d("lambda= ")
            if la is None:
                la = 1.0
                print("lambda pris = 1")
            ar = la * (x + y / 4) / 0.21
            nc = n / (1 + ar)
            mc = nc * (12 * x + y) / 1000.0
            q1 = mc * pci * 1000
            p("air/carb mol", ar)
            p("mcarb mg", mc * 1e6)
            p("QCD J", q1)

    if ty == "2":
        td = tc + q1 / (n * cp)
        r = td / tc
        vd = va * r
        pd = pc
    else:
        td = tc + q1 / (n * cv)
        r = 1.0
        vd = va
        pd = pc * td / tc

    p("TD K", td)
    p("pD bar", pd / 100000)
    if ty == "2":
        p("rho", r)

    print("")
    print("--- POINT E ---")
    te = td * (vd / vb) ** (g - 1)
    pe = n * R * te / vb
    p("TE K", te)
    p("pE bar", pe / 100000)

    print("")
    print("--- W et Q ---")
    print("1 cycle 1 cylindre")
    wbc = n * cv * (tc - tb)
    if ty == "2":
        wcd = -pc * (vd - va)
    else:
        wcd = 0.0
    wde = n * cv * (te - td)
    qeb = n * cv * (tb - te)
    p("W BC J", wbc)
    p("W CD J", wcd)
    p("Q CD J", q1)
    p("W DE J", wde)
    p("Q EB J", qeb)
    p("W total J", wbc + wcd + wde)

    if ty == "2":
        if abs(r - 1) < 1e-9:
            et = 1 - ep ** (1 - g)
        else:
            et = 1 + (ep ** (1 - g) - ep ** (1 - g) * r ** g) / (g * (r - 1))

    print("")
    print("--- RENDEMENT TH ---")
    p("eta th %", et * 100)
    wt = et * q1
    p("Wth J", wt)

    wi = wt
    wd = wt
    print("")
    print("--- REND. REEL ---")
    if go("rend. reels ef,em ?"):
        print("rendement de forme")
        print("0-1, vide = 1")
        ef = d("ef= ")
        if ef is None:
            ef = 1.0
        print("rendement meca")
        print("0-1, vide = 1")
        em = d("em= ")
        if em is None:
            em = 1.0
        wi = ef * wt
        wd = em * wi
        p("Windique J", wi)
        p("Wdispo J", wd)
        p("eta eff %", et * ef * em * 100)

    print("")
    print("--- PUISSANCE ---")
    if go("puissance/vitesse ?"):
        print("si N inconnu : vide")
        nn = q("vitesse N tr/min", "N= ")
        if nn is not None:
            p("Pth kW", nn / kt * wt * z / 1000)
            p("Peff kW", nn / kt * wd * z / 1000)
        else:
            pe2 = q("Peff en kW", "Peff= ")
            if pe2 is not None and wd != 0:
                p("N tr/min", abs(pe2) * 1000 * kt / (wd * z))

print("")
print("=== FIN ===")
