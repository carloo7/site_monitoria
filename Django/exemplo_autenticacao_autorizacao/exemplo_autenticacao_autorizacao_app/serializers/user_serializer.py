from django.contrib.auth.models import User
from rest_framework import serializers
import re


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)


    def validate_password(self, password):
        if not re.search("[A-Z]", password):
            raise serializers.ValidationError("A senha deve conter pelo menos uma letra maiúscula")
        if not re.search("[a-z]", password):
            raise serializers.ValidationError("A senha deve conter pelo menos uma letra minúscula")
        if not re.search("[0-9]", password):
            raise serializers.ValidationError("A senha deve conter pelo menos um algarismo")
        if not re.search("[^a-zA-Z0-9]", password):
            raise serializers.ValidationError("A senha deve conter pelo menos um caracter especial")
        if len(password) < 8:
            raise serializers.ValidationError("A senha deve conter pelo menos 8 caracteres")
        return password

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
