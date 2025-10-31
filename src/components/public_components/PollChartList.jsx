import PollChart from "./PollChart";

export default function PollChartList() {
  const polls = [
    {
      flag: "twemoji:flag-india",
      question:
        "It is acceptable to end a personal relationship solely because of someone’s political party affiliation?",
      options: [
        "A) Strongly agree",
        "B) Somewhat agree",
        "D) Somewhat disagree",
        "E) Strongly disagree",
      ],
      percentage: 99,
    },
    {
      flag: "twemoji:flag-united-states",
      question:
        "Should schools have more freedom to design their own curriculum?",
      options: [
        "A) Yes, full control",
        "B) Partial control",
        "C) Minor flexibility",
        "D) No, follow national standards",
      ],
      percentage: 82,
    },
    {
      flag: "twemoji:flag-united-kingdom",
      question:
        "Would you support increased government funding for renewable energy?",
      options: [
        "A) Strongly support",
        "B) Somewhat support",
        "C) Neutral",
        "D) Oppose",
      ],
      percentage: 91,
    },
    {
      flag: "twemoji:flag-canada",
      question:
        "Do you think social media platforms should verify all users’ identities?",
      options: [
        "A) Yes, to reduce fake accounts",
        "B) Maybe, depending on privacy",
        "C) No, users deserve anonymity",
        "D) Somewhat support",
      ],
      percentage: 65,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 sm:gap-6 w-full sm:px-0">
      {polls.map((poll, index) => (
        <PollChart
          key={index}
          flag={poll.flag} // Pass the icon string, not JSX
          question={poll.question}
          options={poll.options}
          percentage={poll.percentage}
          className={
            index === 0 
              ? "sm:col-span-2 lg:col-span-3 xl:col-span-3" 
              : ""
          }
        />
      ))}
    </div>
  );
}
