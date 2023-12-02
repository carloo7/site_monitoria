from django.db import models

class Disciplina(models.Model):
    codigo = models.CharField(max_length=6, primary_key=True)
    nome = models.CharField(max_length=100)
