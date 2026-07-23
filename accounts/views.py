from django.shortcuts import redirect, render


def login_view(request):
    """
    Placeholder: por enquanto qualquer envio do formulário leva ao dashboard.
    A autenticação de verdade (LoginView + authenticate) entra depois.
    """
    if request.method == "POST":
        return redirect("dashboard:home")

    return render(request, "accounts/login.html")
