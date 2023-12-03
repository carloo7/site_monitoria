from rest_framework import serializers
from django.contrib.auth.models import User
import re

class ProfessorSerializer(serializers.ModelSerializer):
    
    email = serializers.EmailField(write_only=True)
    def validate_email(self, email):
        if not re.search('(@maua.br$)', email):
            raise serializers.ValidationError('O email deve ser o email institucional')
        return email
    
    password = serializers.CharField(write_only=True)
    def validate_password(self,password):
        #pelo menos uma letra maiuscula
        if not re.search('[A-Z]', password):
            raise serializers.ValidationError("A senha deve conter pelo menos uma letra maiúscula")
        #pelo menos uma letra minuscula
        if not re.search('[a-z]', password):
            raise serializers.ValidationError("A senha deve conter pelo menos uma letra minúscula")
        #pelo menos um numero
        if not re.search('[0-9]', password):
            raise serializers.ValidationError("A senha deve conter pelo menos um número")
        #pelo menos um caracter especial (o ^ é para negar)
        if not re.search('[^a-zA-Z0-9]', password):
            raise serializers.ValidationError("A senha deve conter pelo menos um caracter especial")
        #pelo menos oito caracteres
        if len(password) < 8:
            raise serializers.ValidationError("A senha deve conter pelo menos oito caracteres")
        return password

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password', 'is_staff', 'is_superuser')