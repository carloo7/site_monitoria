from django.contrib.auth.models import User
from rest_framework import serializers
import re

class AlunoSerializer(serializers.ModelSerializer):

    username = serializers.CharField(write_only=True)
    def validate_username(self, username):

        if not re.search('([0-9]{2}\.[0-9]{5}-[0-9])', username):
            raise serializers.ValidationError('O campo deve conter o seu RA (xx.xxxxx-x onde x são digitos de 0 a 9)')
        
        return username
    email = serializers.EmailField(write_only=True)
    def validate_email(self, email):
        if not re.search('([0-9]{2}\.[0-9]{5}-[0-9]@maua.br)', email):
            raise serializers.ValidationError('O e-mail de login deve ser seu email institucional (xx.xxxxx-x@maua.br)')
        return email
    
    password = serializers.CharField(write_only=True)
    def validate_password(self,password):
        if not re.search('[0-9]{9}', password):
            raise serializers.ValidationError('A senha de acesso deve ser o seu RG, sem pontos ou hífens')
        return password

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password', 'is_staff', 'is_superuser')