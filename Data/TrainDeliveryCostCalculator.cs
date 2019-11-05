using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AugenBookStore.Data
{
    public class TrainDeliveryCostCalculator : IDeliveryServiceCalculator
    {
        public decimal Calculate(int month)
        {
            decimal result = 0;
            switch (month)
            {
                case 6:
                case 7:
                case 8:
                    result = 10 * (decimal)0.8;
                    break;
                case 9:
                    result = 10 * (decimal)1.8;
                    break;
                default:
                    result = 10 * 1;
                    break;
            }

            return result;
        }
    }
}
