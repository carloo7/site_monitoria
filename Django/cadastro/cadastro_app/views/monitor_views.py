from rest_framework import views, status
from rest_framework.response import Response
from django.contrib.auth.models import User
from cadastro_app.serializers import MonitorSerializer

class CadastroNovoMonitorView(views.APIView):
    def post(self, request):
        serializer = MonitorSerializer(data=request.data)
        if serializer.is_valid():
            monitor = User.objects.create_user(**serializer.validated_data)
            return Response(MonitorSerializer(monitor).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)