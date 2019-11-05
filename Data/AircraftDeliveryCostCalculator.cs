using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AugenBookStore.Data
{
    public class AircraftDeliveryCostCalculator: IDeliveryServiceCalculator
    {
        public decimal Calculate(int month)
        {
            decimal result = 0;
            switch (month)
            {
                case 6:
                case 7:
                case 8:
                    result = 20 * (decimal)0.8;
                    break;
                case 9:
                    result = 20 * 2;
                    break;
                default:
                    result = 20 * 1;
                    break;
            }

            return result;
        }
    }
}
