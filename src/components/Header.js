import React from "react";
import { Card, CardBody } from "reactstrap";

const Header=()=>{
    return(
        <div className="text-center my-2">
            <Card className="my-1 bg-warning">
                <CardBody>
                <h1>Welcome to Courses Application</h1>
                </CardBody>
            </Card>
        </div>
    )
}

export default Header;