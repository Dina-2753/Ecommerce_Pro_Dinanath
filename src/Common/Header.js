import React from 'react'
import "../../src/Style/Dashboard.css"
import { VscAccount } from "react-icons/vsc"
import { AiOutlinePlus } from "react-icons/ai"
import { BsHandbag } from "react-icons/bs"
import { BsCurrencyRupee } from 'react-icons/bs';

import '../Style/footer.css'
function Header() {
    return (
        <div class='header'>
            <p >Flat <BsCurrencyRupee style={{ fontSize: "28px" }} />400 Off on your first order<AiOutlinePlus style={{ fontSize: "20px" }} /> free shipping </p>

        </div>


    )
}

export default Header