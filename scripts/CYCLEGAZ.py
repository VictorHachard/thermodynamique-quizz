# CYCLE GAZ / TURBINE (Casio)
# machines ouvertes
# Joule, turbine a gaz...
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

def ch(t, n):
    while True:
        s = input(t)
        if len(s) == 1 and s >= "1" and s <= str(n):
            return s
        print("reponds 1 a " + str(n))

def f(s):
    print("  " + s)

def p(n, v):
    print(n + " = " + str(round(v, 2)))

print("=== CYCLE GAZ ===")
print("machines ouvertes")
print("enchainees")
print("tout par kg, avec cp")

print("")
print("--- DONNEES GAZ ---")
cp = qr("cp du gaz J/kgK", "cp= ")
print("gamma")
print("vide = 1.4 (air)")
g = d("gamma= ")
if g is None:
    g = 1.4
    print("gamma pris = 1.4")
md = q("debit kg/s", "debit= ")
if md is None:
    md = 0.0
t = qr("T depart T1 en C", "T1= ") + 273.15
pr = qr("p depart p1 (bar)", "p1= ")

wt = 0.0
qi = 0.0
qt = 0.0
i = 1
print("")
print("etat 1 :")
f("T en KELVIN")
p("T K", t)
p("p", pr)

while True:
    print("")
    print("--- ETAPE ---")
    print("adia, isob ou fin ?")
    c = ch("1=ad 2=iso 3=fin : ", 3)
    if c == "3":
        break
    if c == "1":
        print("adiabatique : q = 0")
        print("rapport p ou W ?")
        s = ch("1=rapp p 2=W : ", 2)
        if s == "1":
            p2 = qr("pression finale", "pfin= ")
            f("T2 = T1.(p2/p1)^")
            f("   ((g-1)/g)")
            t2 = t * (p2 / pr) ** ((g - 1) / g)
        else:
            w = qr("travail w en J/kg", "w= ")
            f("T2 = T1 + w/cp")
            t2 = t + w / cp
            f("p2 = p1.(T2/T1)^")
            f("   (g/(g-1))")
            p2 = pr * (t2 / t) ** (g / (g - 1))
        f("w = cp.(T2-T1)")
        w = cp * (t2 - t)
        wt = wt + w
        p("w J/kg", w)
    else:
        print("isobare : p2 = p1")
        t2 = qr("T finale en C", "Tfin= ") + 273.15
        p2 = pr
        f("q = cp.(T2-T1)")
        qe = cp * (t2 - t)
        qt = qt + qe
        if qe > 0:
            qi = qi + qe
        p("q J/kg", qe)
    t = t2
    pr = p2
    i = i + 1
    print("")
    print("etat " + str(i) + " :")
    p("T K", t)
    p("p", pr)

print("")
print("--- BILAN ---")
f("Wnet = somme des w")
p("Wnet J/kg", wt)
f("Qfour = somme q > 0")
p("Qfourni J/kg", qi)
f("verif Wnet+Qtot = 0")
p("Qtot J/kg", qt)
if qi > 0:
    f("eta = |Wnet|/Qfour")
    p("eta %", abs(wt) / qi * 100)
if md > 0:
    f("P = mdot.w")
    p("Pnet kW", md * wt / 1000)
    p("Pth kW", md * qi / 1000)

print("")
print("=== FIN ===")
