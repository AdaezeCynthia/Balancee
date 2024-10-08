import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import {
  statisticsCardsData,
  reviewTableData,
  ordersOverviewData,
} from "@/data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";

export function Reward() {
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            
            footer={

           <Typography className="font-normal font-sans text-blue-gray-600">
                 {title === "Total Cashback" && (
                  
                  <button
                    className="my-[-1px] px-4 py-[5px]  bg-customBlue text-white absolute text-[10px] right-[15px]
                     font-bold  font-sans rounded-[20px] hover:bg-blue-400"
                  >
                    Cashback
                  </button>
                )}
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }


          />
        ))}
      </div>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
      
      </div>
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>











              
              <Typography variant="h6"  className="mb-1 ">
                Cashback History
              </Typography>
              <Typography
                variant="small"
                className="flex items-center gap-1 font-normal font-sans text-blue-gray-600"
              >
                <CheckCircleIcon strokeWidth={3} className="h-4 w-4 text-blue-gray-200" />
                <strong>3 Cashbacks</strong> this month
              </Typography>
            </div>
            <Menu placement="left-start">
              <MenuHandler>
                <IconButton size="sm" variant="text" color="blue-gray">
                  <EllipsisVerticalIcon
                    strokeWidth={3}
                    fill="currenColor"
                    className="h-6 w-6"
                  />
                </IconButton>
              </MenuHandler>
             
            </Menu>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["date", "order id", "amount", "cashback %"].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-6 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-medium font-sans uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    )
                  )}
                </tr>
              </thead>
           








              <tbody>
  {reviewTableData.map(({ id, name, order, amount, rate }) => {
    const className = `py-3 px-5 ${
      reviewTableData.indexOf({ id, name, order, amount, rate }) === reviewTableData.length - 1
        ? ""
        : "border-b border-blue-gray-50"
    }`;

    return (
      <tr key={id}>
        <td className={className}>
          <div className="flex items-center gap-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-bold font-sans"
            >
              {name}
            </Typography>
          </div>
        </td>
        <td className={className}>
          {order.map(({ id: orderId }) => (
            <Tooltip key={orderId} content={`ID: ${orderId}`} placement="top">
              <span className="text-blue-gray-600 font-sans cursor-pointer">{orderId}</span>
            </Tooltip>
          ))}
        </td>
        <td className={className}>
          <Typography
            variant="small"
            className="text-xs font-medium font-sans text-blue-gray-600"
          >
            {amount}
          </Typography>
        </td>
        <td className={className}>
          <Typography
            variant="small"
            className="mb-1 block text-xs font-sans font-medium text-blue-gray-600"
          >
            {rate}%
          </Typography>
          <div className="relative h-1 bg-gray-200 rounded-full">
            <div
              className={`absolute top-0 left-0 h-full rounded-full ${
                rate === 100 ? 'bg-customBlue' : 'bg-customBlue'
              }`}
              style={{ width: `${rate}%` }}
            />
          </div>
        </td>
      </tr>
    );
  })}
</tbody>















            </table>
          </CardBody>
        </Card>
        <Card className="border border-blue-gray-100 shadow-sm">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 p-6"
          >
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Earning Overview
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 font-normal font-sans text-blue-gray-600"
            >
              <ArrowUpIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-green-500"
              />
              <strong>13%</strong> this month
            </Typography>
          </CardHeader>
          <CardBody className="pt-0">
            {ordersOverviewData.map(
              ({ icon, color, title, description }, key) => (
                <div key={title} className="flex items-start gap-4 py-3">
                  <div
                    className={`relative p-1 after:absolute after:-bottom-6 
                      after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                      key === ordersOverviewData.length - 1
                        ? "after:h-0"
                        : "after:h-4/6"
                    }`}
                  >
                    {React.createElement(icon, {
                      className: `!w-5 !h-5 ${color}`,
                    })}
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="block font-medium font-sans"
                    >
                      {title}
                    </Typography>
                    <Typography
                      as="span"
                      variant="small"
                      className="text-xs font-medium font-sans text-blue-gray-500"
                    >
                      {description}
                    </Typography>
                  </div>
                </div>
              )
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Reward;
