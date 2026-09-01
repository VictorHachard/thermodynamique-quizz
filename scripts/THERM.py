# ECHANGE THERMIQUE (Casio)
# mcdT, latente, melange, debit
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
    print(n + " = " + str(round(v, 3)))

print("=== ECHANGE THERM ===")
print("type de calcul :")
print("1=Q=mcdT   2=Q=mL")
print("3=melange  4=debit")
c = ch("1, 2, 3 ou 4 : ", 4)

if c == "1":
    print("")
    print("--- Q = m.c.dT ---")
    print("sans changement")
    print("d etat")
    print("temperatures en :")
    uc = input("1=C 2=K : ")
    if uc == "2":
        u = "K"
    else:
        uc = "1"
        u = "C"
    print("-> tout en " + u)
    f("K = C + 273.15")
    f("C = K - 273.15")
    m = qr("masse m kg", "m= ")
    ce = qr("capacite c J/kgK", "c= ")
    t1 = qr("T initiale en " + u, "Ti= ")
    t2 = qr("T finale en " + u, "Tf= ")
    f("dT = Tf - Ti")
    f("dT identique C ou K")
    p("dT C", t2 - t1)
    f("Q = m.c.dT")
    qc = m * ce * (t2 - t1)
    p("Q J", qc)
    f("1 kJ = 1000 J")
    p("Q kJ", qc / 1000)
    if qc > 0:
        print("Q > 0 : recue")
    else:
        print("Q < 0 : cedee")

elif c == "2":
    print("")
    print("--- Q = m.L ---")
    print("changement d etat")
    print("a T constante")
    m = qr("masse m kg", "m= ")
    l = qr("chaleur latente J/kg", "L= ")
    f("Q = m.L")
    qc = m * l
    p("Q J", qc)
    p("Q kJ", qc / 1000)

elif c == "3":
    print("")
    print("--- MELANGE ---")
    print("temperature finale")
    print("Q1 + Q2 = 0")
    print("temperatures en :")
    uc = input("1=C 2=K : ")
    if uc == "2":
        u = "K"
    else:
        uc = "1"
        u = "C"
    print("-> tout en " + u)
    f("K = C + 273.15")
    f("C = K - 273.15")
    m1 = qr("masse 1 kg", "m1= ")
    c1 = qr("capacite 1 J/kgK", "c1= ")
    t1 = qr("temperature 1 " + u, "T1= ")
    m2 = qr("masse 2 kg", "m2= ")
    c2 = qr("capacite 2 J/kgK", "c2= ")
    t2 = qr("temperature 2 " + u, "T2= ")
    den = m1 * c1 + m2 * c2
    if den == 0:
        print("m1c1+m2c2 = 0 :")
        print("calcul impossible")
    else:
        f("Tf = m1c1T1+m2c2T2")
        f("     /(m1c1+m2c2)")
        tf = (m1 * c1 * t1 + m2 * c2 * t2) / den
        p("Tf " + u, tf)
        f("Q1 = m1.c1.(Tf-T1)")
        p("Q1 J", m1 * c1 * (tf - t1))
        f("Q2 = m2.c2.(Tf-T2)")
        p("Q2 J", m2 * c2 * (tf - t2))
        f("verif Q1 + Q2 = 0")
        p("Q1+Q2", m1 * c1 * (tf - t1) + m2 * c2 * (tf - t2))

else:
    print("")
    print("--- DEBIT ---")
    print("P = mdot.c.dT")
    print("P en W dans la")
    print("formule (kW x1000)")
    print("laisse vide juste")
    print("l inconnue")
    while True:
        pu = q("puissance P en kW", "P= ")
        md = q("debit mdot kg/s", "mdot= ")
        if pu is not None or md is not None:
            break
        print("il faut P ou mdot")
    ce = qr("capacite c J/kgK", "c= ")
    if pu is None or md is None:
        dt = qr("ecart dT (C ou K)", "dT= ")
    else:
        dt = None
    if pu is None:
        f("P = mdot.c.dT")
        p("P W", md * ce * dt)
        p("P kW", md * ce * dt / 1000)
    elif md is None:
        if ce * dt == 0:
            print("c ou dT = 0 :")
            print("mdot impossible")
        else:
            f("mdot = P(W)/(c.dT)")
            p("mdot kg/s", pu * 1000 / (ce * dt))
            f("eau : 1 kg = 1 L")
            f("m3/h = kg/s x 3.6")
            p("mdot m3/h", pu * 1000 / (ce * dt) * 3.6)
    else:
        if md * ce == 0:
            print("mdot ou c = 0 :")
            print("dT impossible")
        else:
            f("dT = P(W)/(mdot.c)")
            p("dT C", pu * 1000 / (md * ce))

print("")
print("=== FIN ===")
