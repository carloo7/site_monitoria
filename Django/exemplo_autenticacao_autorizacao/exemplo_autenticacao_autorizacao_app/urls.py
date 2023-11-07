from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from exemplo_autenticacao_autorizacao_app.views import CadastroNovoUsuarioView

urlpatterns = [
    path('signup/', csrf_exempt(CadastroNovoUsuarioView.as_view()), name='signup'),
]