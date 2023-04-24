import csv
datafile = open('Class Data.csv', 'r')
data = list(csv.reader(datafile))
print(data)
