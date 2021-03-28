import React from "react";
import PageTitle from "../components/Typography/PageTitle";
import SectionTitle from "../components/Typography/SectionTitle";
import { Card, CardBody, Button } from "@windmill/react-ui";

function Tickets() {
  return (
    <>
      <PageTitle>Manage Tickets</PageTitle>
      <div
        className="rounded-lg p-6 mb-6"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <SectionTitle>Employee Tickets</SectionTitle>
        <div className="grid gap-6 mb-8 md:grid-cols-2">
          <Card>
            <CardBody>
              <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                Leave Request
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                cum commodi a omnis numquam quod? Totam exercitationem quos hic
                ipsam at qui cum numquam, sed amet ratione! Ratione, nihil
                dolorum.
              </p>
              <div className="flex justify-between mt-4 px-1">
                <Button
                  style={{
                    backgroundColor: "#f98080",
                  }}
                >
                  Decline
                </Button>
                <Button>Approve</Button>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                Leave Request
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                cum commodi a omnis numquam quod? Totam exercitationem quos hic
                ipsam at qui cum numquam, sed amet ratione! Ratione, nihil
                dolorum.
              </p>
              <div className="flex justify-between mt-4 px-1">
                <Button
                  style={{
                    backgroundColor: "#f98080",
                  }}
                >
                  Decline
                </Button>
                <Button>Approve</Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <div
        className="rounded-lg p-6 mb-6"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <SectionTitle>Customer Tickets</SectionTitle>
        <div className="grid gap-6 mb-8 md:grid-cols-2">
          <Card>
            <CardBody>
              <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                Leave Request
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                cum commodi a omnis numquam quod? Totam exercitationem quos hic
                ipsam at qui cum numquam, sed amet ratione! Ratione, nihil
                dolorum.
              </p>
              <div className="flex justify-between mt-4 px-1">
                <Button
                  style={{
                    backgroundColor: "#f98080",
                  }}
                >
                  Decline
                </Button>
                <Button>Approve</Button>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                Leave Request
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                cum commodi a omnis numquam quod? Totam exercitationem quos hic
                ipsam at qui cum numquam, sed amet ratione! Ratione, nihil
                dolorum.
              </p>
              <div className="flex justify-between mt-4 px-1">
                <Button
                  style={{
                    backgroundColor: "#f98080",
                  }}
                >
                  Decline
                </Button>
                <Button>Approve</Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Tickets;
