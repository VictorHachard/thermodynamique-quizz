# CYCLE GAZ / TURBINE (Casio)
# machines ouvertes
# Joule, turbine a gaz...
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

def p(n, v):
    print(n + " = " + str(round(v, 2)))

print("=== CYCLE GAZ ===")
print("machines ouvertes")
print("enchainees")

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
        print("rapport p ou W ?")
        s = ch("1=rapp p 2=W : ", 2)
        if s == "1":
            p2 = qr("pression finale", "pfin= ")
            t2 = t * (p2 / pr) ** ((g - 1) / g)
        else:
            w = qr("travail w en J/kg", "w= ")
            t2 = t + w / cp
            p2 = pr * (t2 / t) ** (g / (g - 1))
        w = cp * (t2 - t)
        wt = wt + w
        p("w J/kg", w)
    else:
        t2 = qr("T finale en C", "Tfin= ") + 273.15
        p2 = pr
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
p("Wnet J/kg", wt)
p("Qfourni J/kg", qi)
p("Qtot J/kg", qt)
if qi > 0:
    p("eta %", abs(wt) / qi * 100)
if md > 0:
    p("Pnet kW", md * wt / 1000)
    p("Pth kW", md * qi / 1000)

print("")
print("=== FIN ===")
