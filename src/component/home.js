import React from 'react';
import './style/home.css';
import Card from './card';
import Img from './style/box.png';
import cloud from './style/cloud.png';

function Home() {
    return (
        <div className='container-fluid'>
            <div className='mainBox'>
                <div className='leftBar'>
                    <div className='cloud'>
                        <img src={cloud} alt='cloud'/>
                    </div>
                    <div className='boxImage'>
                        <img className='box' src={Img} alt='box'/>
                        <img className='box' src={Img} alt='box'/>
                        <img className='box' src={Img} alt='box'/>
                        <img className='box' src={Img} alt='box'/>
                        <img className='box' src={Img} alt='box'/>
                        <img className='box' src={Img} alt='box'/>
                    </div>
                    <div className='profile'>DK</div>
                </div>
                <div className='rightBar'>
                    <div className='topRow_1'>
                        <div><h3>Hi, Jennie Moss</h3></div>
                        <div><span> Last scanned on March 20th, 2023 11:30 PM IST</span></div>
                    </div>
                    {/* card Componet */}
                    <Card />
                    {/* card Componet */}

                    {/* Table Box - 1  */}

                    <div className='tableBox_1'>
                        <h5 style={{margin: "1rem 0px 1rem 2.3rem"}}>Buckets you own</h5>

                        <div className='container'>
                            <table class="table tableData">
                                <thead>
                                    <tr>
                                        <td>Name</td>
                                        <td>Budget</td>
                                        <td>Spend</td>
                                        <td>Forecast</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{color:"#3593b9"}}>ACME Corp</td>
                                        <td>$ 200,000</td>
                                        <td>$ 173,762</td>
                                        <td>$ 205,049</td>
                                    </tr>
                                    <tr>
                                        <td style={{color:"#3593b9"}}>Raman Inc</td>
                                        <td>$ 200,000</td>
                                        <td>$ 173,762</td>
                                        <td>$ 205,049</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Table Box - 2  */}

                    <div className='tableBox_2'>
                        <h5 style={{margin: "1rem 0px 1rem 2.3rem"}}>Approvals assigned to you</h5>

                        <div className='container'>
                            <table class="table tableData">
                                <thead>
                                    <tr>
                                        <td>Bucket Name</td>
                                        <td>Current Budget</td>
                                        <td>Requested Budget</td>
                                        <td>Requested By</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{color:"#3593b9"}}>ACME Corp</td>
                                        <td>$ 200,000</td>
                                        <td>$ 250,000</td>
                                        <td style={{color:"#3593b9"}}>Joe Hilfinger</td>
                                        <td style={{textAlign:"end"}}>
                                        <button className='tableBtn'>Approve</button>&nbsp;&nbsp;
                                        <button className='tableBtn'>Reject</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Table Box - 3  */}

                    <div className='tableBox_3'>
                        <h5 style={{margin: "1rem 0px 1rem 2.3rem"}}>Buckets you are member of</h5>

                        <div className='container'>
                            <table class="table tableData">
                                <thead>
                                    <tr>
                                        <td>Name</td>
                                        <td>Budget</td>
                                        <td>Spend</td>
                                        <td>Forecast</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{color:"#3593b9"}}>Longate</td>
                                        <td>$ 200,000</td>
                                        <td>$ 173,762</td>
                                        <td>$ 205,049</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;