import React,{Component} from "react"
import './styles.css'

class Table extends Component{
    
    render(){
        return (
        <div>
            <table id='sales' className="sales">
                <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </tbody>
            </table>
        </div>
        );
    }

    renderTableData(){
        let salesData=this.props.d.sales;
        return salesData.map((sale,i)=>{
            const{weekEnding,retailSales,wholesaleSales,unitsSold,retailerMargin}=sale;
            return (
                <tr key={i}>
                    <td>{weekEnding}</td>
                    <td>{retailSales}</td>
                    <td>{wholesaleSales}</td>
                    <td>{unitsSold}</td>
                    <td>{retailerMargin}</td>
                </tr>
            )
        });
    }

    renderTableHeader(){
        let salesData=this.props.d.sales;
        //let header=Object.keys(salesData[0])
        let header=["week ending","retail sales","wholesale sales","units sold","retailer margin"]
        return header.map((key,i)=>{
            return <th key={i}>{key.toUpperCase()}</th>
        })
    
    }
}



export default Table;