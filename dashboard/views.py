from django.shortcuts import render


def home(request):
    return render(
        request,
        "dashboard/dashboard.html",
        {
            # marca o item ativo no menu lateral
            "current_module": "dashboard",
        },
    )
