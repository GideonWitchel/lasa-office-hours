import csv

datafile = open('Class Data.csv', 'r')
data = list(csv.reader(datafile))
datafile.close()

fileOut = open("classes.txt", "x")
fileOut.write(str(data))
fileOut.close()

datafile2 = open('Hours with Pointers.csv', 'r')
data2 = list(csv.reader(datafile2))
datafile2.close()

newData = []
for row in range(0, len(data2)):
    newRow = []
    for item in range(0, len(data2[row])):
        newRow.append(data2[row][item].split(","))
    newData.append(newRow)

fileOut2 = open("times.txt", "x")
fileOut2.write(str(newData))
fileOut2.close()
