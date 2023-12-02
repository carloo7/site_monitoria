from rest_framework import views, status
from rest_framework.response import Response
from cadastro_app.serializers import AlunoSerializer
from cadastro_app.models import Usuario
class CadastroNovoAlunoView(views.APIView):
    def post(self, request):
        serializer = AlunoSerializer(data=request.data)
        if serializer.is_valid():
            user = Usuario.objects.create(**serializer.validated_data)
            return Response(AlunoSerializer(user).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)