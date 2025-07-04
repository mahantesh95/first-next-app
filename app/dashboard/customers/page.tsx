"use-client";
import { fetchCutomersDetails } from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default async function Page() {
  const customers = await fetchCutomersDetails();
  // console.log("customers", customers);
  return (
    <>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Customers Page
      </h1>
      <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
        <table className="hidden min-w-full text-gray-900 md:table">
          <thead className="rounded-lg text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                Image
              </th>
              <th scope="col" className="px-4 py-5 font-medium ">
                Name
              </th>
              <th scope="col" className="px-4 py-5 font-medium ">
                Email
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {customers?.map((customer) => {
              return (
                <tr
                  key={customer.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={customer.image_url}
                        className="mr-2 rounded-full"
                        height={28}
                        width={28}
                        alt={`${customer.name}_cutomer-img`}
                      />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {customer.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {customer.email}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
