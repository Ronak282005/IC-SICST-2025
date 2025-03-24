import React from "react";

interface ImportantDate {
  title: string;
  subtitle: string;
  date: string;
  isImportant: boolean;
  enabled: boolean;
}

const impDateData: ImportantDate[] = [
  {
    title: "Full Paper Submission Date",
    date: "Sep 15, 2024",
    subtitle: "Full Paper Submission Date",

    isImportant: false,
    enabled: true,
  },
  {
    title: "Extended Date",
    date: "Nov 10, 2024",
    subtitle: "Extended Date",

    isImportant: true,
    enabled: true,
  },
  {
    title: "Notification of Acceptance",
    date: "Nov 15, 2024",
    subtitle: "Notification of Acceptance",

    isImportant: true,
    enabled: true,
  },
  {
    title: "Revised paper Submission",
    subtitle: "Nov 20, 2024",
    date: "Revised paper Submission",

    isImportant: false,
    enabled: true,
  },
  {
    title: "Early Bird Registration",
    date: "Nov 20, 2024",
    subtitle: "Early Bird Registration",

    isImportant: false,
    enabled: true,
  },
  {
    title: "Late Registration",
    date: "Nov 30, 2024",
    subtitle: "Late Registration",
    isImportant: false,
    enabled: true,
  },
  {
    title: "Conference Dates",
    date: "Dec 14-16, 2024",
    subtitle: "Conference Dates",
    isImportant: false,
    enabled: true,
  },
];

export default function ImportantDates() {
  return (
    <div className={"mx-auto w-full"}>
      <div
        className={
          "lg:min-w-lg mt-5 w-full rounded-t-md border-l-4 border-[#034EA2] bg-gray-200 bg-gray-200 p-4 lg:max-w-sm"
        }
      >
        <p className={"text-lg font-semibold"}>Important Dates</p>
      </div>
      <div
        className={
          "w-full overflow-x-auto rounded-b-md bg-gray-100 p-4 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400 scrollbar-thumb-rounded-md lg:max-h-80 lg:max-w-sm lg:overflow-y-auto"
        }
      >
        {impDateData.map((item, index) => {
          return (
            <div key={index} className={``}>
              <div
                className={`flex items-start space-x-2 ${item.isImportant ? "-mx-4 -my-5 bg-orange-100 p-4" : ""
                  }`}
              >
                <div>
                  <p
                    className={`font-medium ${item.isImportant ? "text-[#034EA2]" : ""
                      }`}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`text-sm font-light ${item.isImportant ? "text-[#034EA2]" : ""
                      }`}
                  >
                    {item?.subtitle}
                  </p>
                  <p
                    className={`text-sm text-gray-700 ${item.isImportant ? "text-[#034EA2]" : ""
                      }`}
                  >
                    {item.date}
                  </p>
                </div>

                {index === 0 && (
                  <div
                    className={
                      "rounded-full bg-blue-800 bg-opacity-20 font-semibold"
                    }
                  >
                    <p className={"px-2 py-0.5 text-xs text-blue-800"}>New</p>
                  </div>
                )}
                {item.isImportant && (
                  <div className={"flex items-center justify-center space-x-2"}>
                    <div
                      className={
                        "mt-1 rounded-full bg-[#1a1212] bg-opacity-20 font-semibold"
                      }
                    >
                      <p className={"px-2 py-0.5 text-xs text-[#034EA2]"}>
                        Important
                      </p>
                    </div>
                  </div>
                )}
              </div>
              {index !== impDateData.length - 1 && (
                <hr
                  className={`my-5 h-px border-0 bg-gray-200 dark:bg-gray-700 ${item.isImportant && impDateData[index + 1].isImportant
                    ? "bg-red-200"
                    : ""
                    }`}
                />
              )}
            </div>
          );
        })}
        {impDateData.length == 0 && (
          <>
            <h3>No Dates Announced Yet</h3>
          </>
        )}
      </div>
    </div>
  );
}
