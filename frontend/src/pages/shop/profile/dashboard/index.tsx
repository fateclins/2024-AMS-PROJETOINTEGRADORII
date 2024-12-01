import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";


export const description = "A line chart with dots"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Dashboard() {
  
  return (
    <div className="space-y-2.5">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="flex flex-col md:flex-row items-center gap-2">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-md font-medium text-muted-foreground">Total vendas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <h2 className="text-2xl font-semibold">R$1.170,00</h2>

            <div className="flex items-center gap-1">
              <span className="text-sm text-emerald-500 px-2 rounded-full bg-emerald-50">+10%</span>
              <p className="text-sm text-muted-foreground">Em relação ao último mês.</p>
            </div>
          </CardContent>

        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-md font-medium text-muted-foreground">Total de pedidos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <h2 className="text-2xl font-semibold">207</h2>

            <div className="flex items-center gap-1">
              <span className="text-sm text-rose-500 px-2 rounded-full bg-rose-50">-4%</span>
              <p className="text-sm text-muted-foreground">Em relação ao último mês.</p>
            </div>

           
          </CardContent>

        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Receita total</CardTitle>
          <CardDescription>Janeiro - Junho 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[200px] w-full">
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="desktop"
                type="natural"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={{
                  fill: "var(--color-desktop)",
                }}
                activeDot={{
                  r: 6,
                }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}