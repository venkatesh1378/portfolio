from django.urls import path
from portfolio_app.views import PortfolioView

urlpatterns = [
    path('', PortfolioView.as_view(), name='portfolio'),
]