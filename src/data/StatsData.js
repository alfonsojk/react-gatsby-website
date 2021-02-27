import React from "react";
import {  GiEarthAmerica } from 'react-icons/gi';
import {  ImAirplane } from 'react-icons/im';
import { BiTimeFive } from 'react-icons/bi'
import {  FaMoneyCheck } from 'react-icons/fa';

export const  StatsData = [
    {
        icons:(<GiEarthAmerica 
            css={`
                color: #047bf1;   
            `} 
         />
        ),
        title: "Over 100 destinations",
        desc: "Travel to over 100 unique places",
    },
    {
        icons:(<ImAirplane
            css={`
                color: #047bf1;   
            `} 
        />
        ),
        title: "1 Million Trips Made",
        desc: "To Over 1 Million Trips Completed",
    },
    {
        icons:(<BiTimeFive 
            css={`
                color: black;   
            `} 
        />
        ),
        title: "Fastest Attention",
        desc: "Access our support team 24/7",
    },
        {
        icons:(<FaMoneyCheck 
            css={`
                color: #047bf1;   
            `} 
        />
        ),
        title: "Best Deals",
        desc: "Offering you the best prices",
    },

]
