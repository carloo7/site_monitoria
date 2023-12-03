import json
import csv
import requests

with open('C:\\Users\\TheSims\\Desktop\\Alunos.csv', newline="") as csvfile:
    reader = csv.reader(csvfile, delimiter=",", quotechar="|")
    for row in reader:
        dict = {"username" : row[0]}
        dict.update({"email" : row[1]})
        nome = row[2].split()

        dict.update({"first_name" : nome[0]})
        dict.update({"last_name" : nome[-1]})
        dict.update({"is_staff" : row[3]})
        dict.update({"is_superuser" : row[4]})
        dict.update({"password" : row[5]})
        if dict["is_staff"] == "True":
            requests.post("http://localhost:8080/cadastroMonitor/", json=dict)
        else:
            requests.post("http://localhost:8080/cadastroAluno/", json=dict)
        
