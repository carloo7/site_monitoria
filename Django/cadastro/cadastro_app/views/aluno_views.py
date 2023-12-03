from rest_framework import views, status
from rest_framework.response import Response
from cadastro_app.serializers import AlunoSerializer
from django.contrib.auth.models import User
from cadastro_app.models import Monitor
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.views import View


class CadastroNovoAlunoView(views.APIView):
    def post(self, request):
        serializer = AlunoSerializer(data=request.data)
        if serializer.is_valid():
            user = User.objects.create_user(**serializer.validated_data)
            return Response(AlunoSerializer(user).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class AlunoInfoView(View):
    @login_required
    def get(self, request, *args, **kwargs):
        aluno = get_object_or_404(Monitor, id_aluno=request.user)
        data = {
            'first_name': aluno.first_name,
            'last_name': aluno.last_name,
        }
        return JsonResponse(data)