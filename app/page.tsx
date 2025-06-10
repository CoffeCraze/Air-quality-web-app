"use client";

import { use, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";
import { Search, Loader2 } from "lucide-react";
impo;

export default function AirQualityApp() {
  const [city, setCity] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Add a função busca
  const fetchAirQuality = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!city.trim()) {
      setError("Por favvor, insira o nome de uma cidade");
      return;
    }

    if (!apiKey.trim()) {
      setError("Por favor, configure sua chave API");
      setShowApiKeyInput(true);
      return;
    }

    //Simulação de carregamento
    setLoading(true);
    setError("");
  };

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4x1 mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Monitor de Qualidade do Ar
              </h1>
              <p className="text-lg text-gray-600">
                Consulte a Qualidade do ar em tempo real de qualquer cidade
              </p>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 ">
                    <Settings className="w-5 h-5" />
                    Configuração da API
                  </CardTitle>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowApiKeyInput(!showApiKeyInput)}
                  >
                    {showApiKeyInput ? "Ocutar" : "Configurar"}
                  </Button>
                </div>
              </CardHeader>
              {showApiKeyInput && (
                <CardContent>
                  <div className="space-y-3">
                    <Input
                      type="password"
                      placeholder="Insira sua chave API do API-Ninjas"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                    />
                    <p className="text-sm text-gray-600">
                      Obtenha sua chave gratuita em{" "}
                      <a
                        href="https://api.api-ninjas.com"
                        target="_balnk"
                        rel="noopener nore ferrer"
                        className="text-blue-600 hover:underline"
                      >
                        api.api-ninjas.com
                      </a>
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <form onSubmit={fetchAirQuality} className="flex gap-3">
            <div>
              <input
                type="text"
                placeholder="Digite o nome da cidade (ex: São Paulo, Rio de Janeiro)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="text-lg"
              />
            </div>
            <Button type="submit" disabled={loading} className="px-6">
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Search className="w-4 h-4" />
              )}
              {loading ? "Buscando..." : "Buscar"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
