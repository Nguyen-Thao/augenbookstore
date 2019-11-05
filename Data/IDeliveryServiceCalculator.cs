using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AugenBookStore.Data
{
    public interface IDeliveryServiceCalculator
    {
        decimal Calculate(int month);
    }
}
