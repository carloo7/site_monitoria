from django.db import models

class Exercicio(models.Model):
    enunciado = models.CharField(max_length=255)
    resposta = models.CharField(max_length=255)
    
