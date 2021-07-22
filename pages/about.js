import React from 'react'
import Head from 'next/head'

const about = () => {
  return (
    <div>
        <Head>
            <title> About page</title>
        </Head>   

        <h1 className="redColor bigText">About Page!</h1>  


        <style jsx>
          {
            `
            .greenColor{
              color : #0070f3;
            }
            .redColor{
              color: red;
            }
            .bigText{
              font-size: 156px;
            }
            `
          }
        </style>


    </div>
  )
}

export default about
