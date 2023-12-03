from django.db import models
from cadastro_app.models import Disciplina
class Exercicio(models.Model):
    enunciado = models.CharField(max_length=255)
    resposta = models.CharField(max_length=255)
    disciplina = models.ForeignKey(Disciplina, on_delete=models.CASCADE, null=True)
