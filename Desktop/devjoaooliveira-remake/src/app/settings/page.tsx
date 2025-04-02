import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <div className="container mx-auto max-w-2xl py-12">
      <h1 className="mb-8 text-4xl font-bold">Configurações</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Aparência</CardTitle>
          <CardDescription>Personalize a aparência do site</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="dark-mode">Modo escuro</Label>
              <p className="text-sm text-muted-foreground">Ative o modo escuro para reduzir o cansaço visual</p>
            </div>
            <Switch id="dark-mode" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notificações</CardTitle>
          <CardDescription>Configure suas preferências de notificação</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-notifications">Notificações por email</Label>
              <p className="text-sm text-muted-foreground">Receba atualizações sobre novos projetos</p>
            </div>
            <Switch id="email-notifications" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Salvar preferências</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

