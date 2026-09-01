# ECHANGE THERMIQUE (Casio)
# mcdT, latente, melange, debit
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
    print(n + " = " + str(round(v, 3)))

print("=== ECHANGE THERM ===")
print("type de calcul :")
print("1=Q=mcdT   2=Q=mL")
print("3=melange  4=debit")
c = ch("1, 2, 3 ou 4 : ", 4)

if c == "1":
    print("")
    print("--- Q = m.c.dT ---")
    m = qr("masse m kg", "m= ")
    ce = qr("capacite c J/kgK", "c= ")
    t1 = qr("T initiale en C", "Ti= ")
    t2 = qr("T finale en C", "Tf= ")
    qc = m * ce * (t2 - t1)
    p("Q J", qc)
    p("Q kJ", qc / 1000)

elif c == "2":
    print("")
    print("--- Q = m.L ---")
    print("changement d etat")
    m = qr("masse m kg", "m= ")
    l = qr("chaleur latente J/kg", "L= ")
    qc = m * l
    p("Q J", qc)
    p("Q kJ", qc / 1000)

elif c == "3":
    print("")
    print("--- MELANGE ---")
    print("temperature finale")
    m1 = qr("masse 1 kg", "m1= ")
    c1 = qr("capacite 1 J/kgK", "c1= ")
    t1 = qr("temperature 1 C", "T1= ")
    m2 = qr("masse 2 kg", "m2= ")
    c2 = qr("capacite 2 J/kgK", "c2= ")
    t2 = qr("temperature 2 C", "T2= ")
    den = m1 * c1 + m2 * c2
    if den == 0:
        print("m1c1+m2c2 = 0 :")
        print("calcul impossible")
    else:
        tf = (m1 * c1 * t1 + m2 * c2 * t2) / den
        p("Tf C", tf)
        p("Q1 J", m1 * c1 * (tf - t1))
        p("Q2 J", m2 * c2 * (tf - t2))

else:
    print("")
    print("--- DEBIT ---")
    print("P = mdot.c.dT")
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
        dt = qr("ecart dT en C", "dT= ")
    else:
        dt = None
    if pu is None:
        p("P kW", md * ce * dt / 1000)
    elif md is None:
        if ce * dt == 0:
            print("c ou dT = 0 :")
            print("mdot impossible")
        else:
            p("mdot kg/s", pu * 1000 / (ce * dt))
            p("mdot m3/h", pu * 1000 / (ce * dt) * 3.6)
    else:
        if md * ce == 0:
            print("mdot ou c = 0 :")
            print("dT impossible")
        else:
            p("dT C", pu * 1000 / (md * ce))

print("")
print("=== FIN ===")
