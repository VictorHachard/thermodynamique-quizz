# COMBUSTION CxHy (Casio)
# air, exces d air, chaleur
# les lignes indentees sont
# les FORMULES a recopier
# (vide = passer) : tu peux
# laisser vide, sinon la
# question est reposee

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

def f(s):
    print("  " + s)

def p(n, v):
    print(n + " = " + str(round(v, 3)))

print("=== COMBUSTION ===")
print("CxHy + (x+y/4) O2 ->")
print("x CO2 + (y/2) H2O")

print("")
print("--- CARBURANT ---")
x = qr("nombre de carbone x", "x= ")
y = qr("nombre d hydrogene y", "y= ")
print("exces d air lambda")
print("vide = 1")
la = d("lambda= ")
if la is None:
    la = 1.0
    print("lambda pris = 1")

no = x + y / 4
na = no / 0.21
nar = na * la
mm = 12 * x + y

print("")
print("--- PAR MOLE CARB ---")
f("nO2 = x + y/4")
p("nO2 stoe", no)
f("air = 21% O2 donc")
f("nair = nO2/0.21")
p("nair stoe", na)
f("nreel = lam.nair")
p("nair reel", nar)
f("x C -> x CO2")
p("nCO2", x)
f("y H -> y/2 H2O")
p("nH2O", y / 2)
f("M = 12x + y")
p("M carb g/mol", mm)
f("Mair = 28.9 g/mol")
f("AF = nreel.28.9/M")
p("AF masse", nar * 28.9 / mm)

print("")
print("--- QUANTITES ---")
print("pas de quantite ?")
print("laisse les 2 vides")
mc = q("masse carburant kg", "mcarb= ")
if mc is None:
    nc = q("ou moles carbu mol", "ncarb= ")
else:
    f("ncarb = mcarb.1e3/M")
    nc = mc * 1000 / mm
if nc is not None:
    p("n carb mol", nc)
    f("mcarb = ncarb.M")
    p("m carb g", nc * mm)
    f("nair = ncarb.nreel")
    p("n air mol", nc * nar)
    f("mair=nair.28.9/1e3")
    p("m air kg", nc * nar * 28.9 / 1000)
    f("nO2 = ncarb.nO2.lam")
    p("n O2 mol", nc * no * la)
    pci = q("PCI carbu kJ/kg", "PCI= ")
    if pci is not None:
        f("mcarb en kg :")
        f("Q = mcarb.PCI.1e3")
        p("Q J", nc * mm / 1000 * pci * 1000)

print("")
print("=== FIN ===")
