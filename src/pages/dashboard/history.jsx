import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { tableData, reviewTableData } from "@/data";

export function History() {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
      <CardHeader className="mb-8 p-6 bg-customBlue">
  <Typography variant="h6" color="white">
    History
  </Typography>
</CardHeader>

        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Vehicle", "Service Detail", "status", "Booking Date", " "].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold font-sans uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map(
                ({  name, plate, job, success, date }, key) => {
                  const className = `py-3 px-5 ${
                    key === tableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold font-sans"
                            >
                              {name}
                            </Typography>
                            <Typography className="text-xs font-sans font-normal text-blue-gray-500">
                            {plate}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs  font-sans font-semibold text-blue-gray-600">
                          {job}
                        </Typography>
                        
                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color={success ? "green" : "blue-gray"}
                          value={success ? "Successful" : "Pending"}
                          className="py-0.5 px-2 text-[11px] font-medium font-sans w-fit"
                        />
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold font-sans text-blue-gray-600">
                          {date}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold font-sans text-blue-gray-600"
                        >
                          Re-book
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <Card>
        <CardHeader  className="mb-8 p-6 bg-customBlue">
          <Typography variant="h6" color="white">
              Cashback History
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["date", "order id", "amount", "cashback %", ""].map(
                  (el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold font-sans uppercase text-blue-gray-400"
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
    </div>
  );
}

export default History;
