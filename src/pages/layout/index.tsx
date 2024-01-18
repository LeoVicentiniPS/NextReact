import Grid from "@/components/layout/Grid";

export default function PaginaLayout(){
    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="w-[90%] lg:w-4/5">
                <Grid sm={2} md={3} lg={4} xl={6} xl2={12}>
                    <div className="h-24 w-full bg-red-600">#1</div>
                    <div className="h-24 w-full bg-orange-600">#2</div>
                    <div className="h-24 w-full bg-amber-600">#3</div>
                    <div className="h-24 w-full bg-yellow-600">#4</div>
                    <div className="h-24 w-full bg-lime-600">#5</div>
                    <div className="h-24 w-full bg-green-600">#6</div>
                    <div className="h-24 w-full bg-teal-600">#7</div>
                    <div className="h-24 w-full bg-cyan-600">#8</div>
                    <div className="h-24 w-full bg-blue-600">#9</div>
                    <div className="h-24 w-full bg-violet-600">#10</div>
                    <div className="h-24 w-full bg-fuchsia-600">#11</div>
                    <div className="h-24 w-full bg-pink-600">#12</div>
                    
                </Grid>
            </div>
        </div>
    )
}