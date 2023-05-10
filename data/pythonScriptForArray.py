import csv

classes=[]
hoursTable=[[[],[],[],[],[]], [[],[],[],[],[]], [[],[],[],[],[]]]

datafile = open('Unified Office Hours (Responses).csv', 'r')
data = list(csv.reader(datafile))
data.pop(0)
for i in range(len(data)):
    x=data[i]
    classes.append(x[0:4] + x[7:10])
    if "Monday" in x[4]:
        hoursTable[0][0].append(i)
    if "Tuesday" in x[4]:
        hoursTable[0][1].append(i)
    if "Wednesday" in x[4]:
        hoursTable[0][2].append(i)
    if "Thursday" in x[4]:
        hoursTable[0][3].append(i)
    if "Friday" in x[4]:
        hoursTable[0][4].append(i)
    if "Monday" in x[5]:
        hoursTable[1][0].append(i)
    if "Tuesday" in x[5]:
        hoursTable[1][1].append(i)
    if "Wednesday" in x[5]:
        hoursTable[1][2].append(i)
    if "Thursday" in x[5]:
        hoursTable[1][3].append(i)
    if "Friday" in x[5]:
        hoursTable[1][4].append(i)
    if "Monday" in x[6]:
        hoursTable[2][0].append(i)
    if "Tuesday" in x[6]:
        hoursTable[2][1].append(i)
    if "Wednesday" in x[6]:
        hoursTable[2][2].append(i)
    if "Thursday" in x[6]:
        hoursTable[2][3].append(i)
    if "Friday" in x[6]:
        hoursTable[2][4].append(i) 

print("Replace the classes and data array in the index.js file with these:\n")
print("classes="+str(classes))
print("\ndata="+str(hoursTable))
