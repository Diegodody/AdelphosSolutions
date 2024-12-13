namespace OrganizationOfCompanies.API.Models
{
    public class EventViewModel
    {
        public EventViewModel()
        {
        }

        public EventViewModel(int id, string title, string locationOfTheActivity, int typeEvent, int vacancies, DateTime eventStartDate, DateTime eventEndDate)
        {
            Id = id;
            Title = title;
            LocationOfTheActivity = locationOfTheActivity;
            TypeEvent = typeEvent;
            Vacancies = vacancies;
            EventStartDate = eventStartDate;
            EventEndDate = eventEndDate;
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public string LocationOfTheActivity { get; set; }
        public int TypeEvent { get; set; }
        public int Vacancies { get; set; }
        public DateTime EventStartDate { get; set; }
        public DateTime EventEndDate { get; set; }
    }
}
