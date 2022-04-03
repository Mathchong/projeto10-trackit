import styled from 'styled-components';
import bin from './../Assests/bin.svg'
import axios from 'axios';

export default function HabitStats(props) {
    const { name, days, id} = props;
    console.log(days)
    return (
        <HabitBox>
            <h1>{name}</h1>
            <div className="weekday">
                <button className={days.includes(0) ? 'selecionado' : ''}>D</button>
                <button className={days.includes(1) ? 'selecionado' : ''}>S</button>
                <button className={days.includes(2) ? 'selecionado' : ''}>T</button>
                <button className={days.includes(3) ? 'selecionado' : ''}>Q</button>
                <button className={days.includes(4) ? 'selecionado' : ''}>Q</button>
                <button className={days.includes(5) ? 'selecionado' : ''}>S</button>
                <button className={days.includes(6) ? 'selecionado' : ''}>S</button>
            </div>
            <img src={bin} alt='bin icon, for deleting habit'/>
        </HabitBox>
    )
}


const HabitBox = styled.article`
    height: 91px;
    width: 340px;
    border-radius: 5px;
    background-color: #FFFFFF;
    position: relative;
    margin: 10px;

    h1{
        margin: 13px 0px 10px 15px;
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        color :#666666;
    }

    button{
        height: 30px;
        width: 30px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        margin: 0px 4px 15px 0px;
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        color: #DBDBDB;
        background-color: #fff;
    }

    button.selecionado{
        color: #FFF;
        background-color: #DBDBDB;
    }
    .weekday{ 
        margin-left: 15px;
        margin-bottom: 19px;
    }

    img{
        position: absolute;
        right: 10px;
        top: 11px;
    }
`