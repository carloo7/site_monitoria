from django.db import models

class Usuario(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField(primary_key=True)
    username = models.CharField(max_length=10, null=True)
    professor = models.BooleanField(default=False)
    monitor = models.BooleanField(default=False)
