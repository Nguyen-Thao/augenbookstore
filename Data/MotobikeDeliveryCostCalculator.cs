using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AugenBookStore.Data
{
    public class MotobikeDeliveryCostCalculator : IDeliveryServiceCalculator
    {
        public decimal Calculate(int month)
        {
            decimal result = 0;
            switch (month)
            {
                case 6:
                case 7:
                case 8:
                    result = 5 * (decimal)0.5;
                    break;
                case 9:                
                    result = 5 * (decimal)1.5;
                    break;
                default:
                     result = 5 * 1;
                    break;
            }

            return result;
        }
    }
}
