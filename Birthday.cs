using System;

class Program
{
    static void Main()
    {
        //Asks the user to enter their Birthday!
        Console.Write("Enter your birthday date (mm/dd): ");
        string input = Console.ReadLine();


        //converts the string input to DateTime object
        DateTime BirthdayDate = DateTime.Parse(input);

        //Attaining today's date
        DateTime today = DateTime.Today;

        //Calculating the difference between the two dates
        TimeSpan difference = BirthdayDate - today;


        //If the birthday is yet to come, it will print the number of days to go.
        if (difference.Days > 0)
        {
            Console.WriteLine($"Your Birthday is yet to Come! It's {difference.Days} days to go.");
        }
        //If the birthday has already passed, it will print the number of days since the user's birthday.
        else if (difference.Days < 0)
        {
            Console.WriteLine($"Your birthday has already passed. It has been {Math.Abs(difference.Days)} days since your birthday.");
        }
        //If the birthday is today, Output a special message."
        else
        {
            Console.WriteLine("Your Birthday is Today!, HAPPY BIRTHDAY FELLOW USER!");
        }
    }
}

