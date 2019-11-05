using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AugenBookStore.Data.Entities
{
    public class DeliveryService
    {
        IDeliveryServiceCalculator _deliveryServiceCalculator;
        public DeliveryService()
        {

        }
        public DeliveryService(string deliveryServiceName, decimal deliveryServiceCost)
        {
            DeliveryServiceName = deliveryServiceName;
            DeliveryServiceCost = deliveryServiceCost;            
        }
        public DeliveryService(string deliveryServiceName, int month, IDeliveryServiceCalculator deliveryServiceCalculator)
        {
            DeliveryServiceName = deliveryServiceName;
            _deliveryServiceCalculator = deliveryServiceCalculator;
            DeliveryServiceCost = _deliveryServiceCalculator.Calculate(month);
        }

        public int ID { get; set; }
        public string DeliveryServiceNo { get; set; }
        public string DeliveryServiceName { get; set; }
        public decimal DeliveryServiceCost { get; set; }       
        
    }
    
}
