Write-Host "Initializing Mangesh AI Backend..." -ForegroundColor Cyan

$backendDir = ".\backend"
$venvDir = "$backendDir\venv"

# Create virtual environment if it doesn't exist
if (-Not (Test-Path $venvDir)) {
    Write-Host "Creating Python virtual environment..." -ForegroundColor Yellow
    python -m venv $venvDir
}

# Activate virtual environment
$activateScript = "$venvDir\Scripts\Activate.ps1"
if (Test-Path $activateScript) {
    . $activateScript
} else {
    Write-Host "Failed to find activation script. Are you sure python is installed?" -ForegroundColor Red
    exit 1
}

# Install requirements
Write-Host "Installing dependencies... (This might take a moment if downloading ML models)" -ForegroundColor Yellow
pip install -r "$backendDir\requirements.txt"

# Run the backend
Write-Host "Starting FastAPI Server on http://localhost:8000" -ForegroundColor Green
cd $backendDir
uvicorn main:app --reload
