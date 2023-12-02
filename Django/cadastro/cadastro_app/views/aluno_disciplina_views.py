from cadastro_app.models import AlunoDisciplina
from cadastro_app.serializers import AlunoDisciplinaSerializer
from rest_framework import views, status
from rest_framework.response import Response


class CadastroNovoAlunoDisciplinaView(views.APIView):
    def post(self, request):
        serializer = AlunoDisciplinaSerializer(data=request.data)
        if serializer.is_valid():
            aluno_disciplina = AlunoDisciplina.objects.create(**serializer.validated_data)
            return Response(AlunoDisciplinaSerializer(aluno_disciplina).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)