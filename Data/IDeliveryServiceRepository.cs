using AugenBookStore.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AugenBookStore.Data
{
    public interface IDeliveryServiceRepository
    {
        IEnumerable<DeliveryService> GetDeliveryServiceCost(DateTime dateTime);
    }
}
