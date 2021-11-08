export interface OpenPositions{
    openPositions:OpenPosition[]
}
export interface OpenPosition{
    id:number
    name:string
    department:string
    description:string;
    availablePositions:string;
    companyName:string;
    companyDomain :string;
    companyAddress:string;

}
