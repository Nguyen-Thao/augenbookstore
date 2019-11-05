using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AugenBookStore.ViewModels
{
    public class DeliveryServiceViewModel
    {
        public int DeliveryServiceID { get; set; }
        public string DeliveryServiceNo { get; set; }
        public string DeliveryServiceName { get; set; }
        public decimal DeliveryServiceCost { get; set; }
    }
}
